<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Address;
use App\Models\Building;
use App\Models\Type;
use Illuminate\Http\Request;
use DB;

class BuildingController extends Controller
{
    protected $buildings;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $buildings = Building::whenWhereCode($request->has('code'), $request->code) // Coluna CodigoImovel (imb_imbimovel)
            ->whenWhereType($request->has('type'), $request->type) // Coluna TIPOVENDA ou TIPOALUGUEL (imb_imbimovel)
            ->whenWhereBuildingType($request->has('building_type'), $request->building_type) // Coluna TIPOIMOVEL (imb_imbimovel)
            ->whenWhereCity($request->has('city'), $request->city) // Coluna Cidade (imb_imbimovel)
            ->whenWhereDistrict($request->has('district'), $request->district) // Coluna BAIRRO (imb_imbimovel)
            ->whenWherePrice($request->has('price'), $request->price) // Coluna VALORVENDA ou VALORALUGUEL (imb_imbimovel)
            ->whenWhereRooms($request->has('room'), $request->room) // Coluna QUANTIDADEDORMITORIO ?room=2
            ->whenWhereToilets($request->has('toilet'), $request->toilet)
            ->whenWhereGarage($request->has('garage'), $request->garage)
            ->whenWhereArea($request->has('area'), $request->area)  // Coluna AREAPRIVATIVA
            // ->whenWhereSuites($request->has('suite'), $request->suite) // Tabela imb_imovelcaracteristica, coluna QUANTIDADE, codigo = 8
            // ->whenWherePlant($request->has('plan'), $request->plan) // Marcus previsa ver onde tem esse dado, nao encontrei
            ->isPending()
            ->simplePaginate(10);

            foreach ($buildings as $build) {
                $build->ALBUM = $this->album($build->CODIGOIMOVEL);
            }

            foreach ($buildings as $build) {
                $build->CHARACTERISTICS = $this->characteristic($build->CODIGOIMOVEL);
            }

            foreach ($buildings as $build) {
                $build->SUITS = $this->getSuits($build->CODIGOIMOVEL);
            }

        return $buildings;
    }

    /**
     * @return mixed
     */
    public function city()
    {
        return $data = DB::table('IMB_IMOVEL')
            ->select('IMB_IMOVEL.CIDADE')
            ->where('IMB_IMOVEL.PUBLICAR', '1')
            ->groupBy('CIDADE')
            ->get();
    }

    /**
     * @return mixed
     */
    public function district($city)
    {
        return $data = DB::table('IMB_IMOVEL')
            ->select('IMB_IMOVEL.BAIRRO')
            ->where('IMB_IMOVEL.CIDADE', $city)
            ->where('IMB_IMOVEL.PUBLICAR', '1')
            ->groupBy('BAIRRO')
            ->get();
    }

    /**
     * @return Type[]|\Illuminate\Database\Eloquent\Collection
     */
    public function type()
    {
        return Type::all()->map(function($item) {
            return [
                'value' => $item->id,
                'label' => $item->name
            ];
        });
    }

    public function emphasis()
    {
        return Building::where('emphasis',1)->isPending()->get();
    }

    public function commercial()
    {
        return Building::where('commercial',1)->isPending()->get();
    }

    /**
     * @return mixed
     */
    public function characteristic($id)
    {
        return $data = DB::table('IMB_IMOVELCARACTERISTICA')
            ->join('IMB_CARACTERISTICA', 'IMB_CARACTERISTICA.CODIGOCARACTERISTICA', '=', 'IMB_IMOVELCARACTERISTICA.CODIGOCARACTERISTICA')
            ->select('IMB_IMOVELCARACTERISTICA.*', 'IMB_CARACTERISTICA.DESCRICAO')
            ->where('IMB_IMOVELCARACTERISTICA.CODIGOIMOVEL', $id)
            ->get();
    }

    /**
     * @return mixed
     */
    public function album($id)
    {
        return $data = DB::table('IMB_IMOVELFOTO')
            ->select('IMB_IMOVELFOTO.ARQUIVOFOTO', 'IMB_IMOVELFOTO.DESCRICAO')
            ->where('IMB_IMOVELFOTO.CODIGOIMOVEL', $id)
            ->orderBy('IMB_IMOVELFOTO.ORDEM', 'asc')
            ->get();
    }

    /**
     * @return mixed
     */
    public function GetCommercialRealEstate()
    {
        return $data = DB::table('IMB_IMOVEL')
            ->select('IMB_IMOVEL.*', DB::raw('(select ARQUIVOFOTO from IMB_IMOVELFOTO where CODIGOIMOVEL = IMB_IMOVEL.CODIGOIMOVEL order by CODIGOIMOVEL asc limit 1) as ALBUM'))
            ->where('IMB_IMOVEL.DESTAQUEVENDA', 'S')
            ->where('IMB_IMOVEL.PUBLICAR', '1')
            ->get();
    }

    /**
     * @return mixed
     */
    public function getBuildingsType()
    {
        return $data = DB::table('IMB_TIPOIMOVEL')
            ->select('IMB_TIPOIMOVEL.DESCRICAO')
            ->groupBy('DESCRICAO')
            ->orderBy('DESCRICAO')
            ->get();
    }

    /**
     * @return mixed
     */
    public function characteristicsAll()
    {
        return $data = DB::table('IMB_CARACTERISTICA')
            ->select('IMB_CARACTERISTICA.*')
            ->orderBy('DESCRICAO')
            ->get();
    }

    /**
     * @return mixed
     */
    public function characteristicsBySearch($search)
    {
        return $data = DB::table('IMB_IMOVELCARACTERISTICA')
            ->select('IMB_IMOVELCARACTERISTICA.CODIGOIMOVEL')
            ->where('IMB_IMOVELCARACTERISTICA.CODIGOCARACTERISTICA', $search)
            ->groupBy('CODIGOIMOVEL')
            ->get();
    }

    /**
     * @return mixed
     */
    public function highligthRent()
    {
        return $data = DB::table('IMB_IMOVEL')
            ->select('IMB_IMOVEL.*', DB::raw('(select ARQUIVOFOTO from IMB_IMOVELFOTO where CODIGOIMOVEL = IMB_IMOVEL.CODIGOIMOVEL order by CODIGOIMOVEL asc limit 1) as ALBUM'))
            ->where('IMB_IMOVEL.DESTAQUEALUGUEL', 'S')
            ->where('IMB_IMOVEL.PUBLICAR', '1')
            ->get();
    }

    /**
     * @return mixed
     */
    public function GetImoveisRelacionais($cep)
    {
        return $data = DB::table('IMB_IMOVEL')
            ->select('IMB_IMOVEL.*', DB::raw('(select ARQUIVOFOTO from IMB_IMOVELFOTO where CODIGOIMOVEL = IMB_IMOVEL.CODIGOIMOVEL order by CODIGOIMOVEL asc limit 1) as ALBUM')  )
            ->where('IMB_IMOVEL.CEP', $cep)
            ->limit(10)
            ->get();
    }

    /**
     * @return mixed
     * suite codigo 8
     */
    public function getSuits($id)
    {
        return $data = DB::table('IMB_IMOVELCARACTERISTICA')
            ->join('IMB_CARACTERISTICA', 'IMB_CARACTERISTICA.CODIGOCARACTERISTICA', '=', 'IMB_IMOVELCARACTERISTICA.CODIGOCARACTERISTICA')
            ->select('IMB_IMOVELCARACTERISTICA.*')
            ->where('IMB_IMOVELCARACTERISTICA.CODIGOCARACTERISTICA', 8)
            ->where('IMB_IMOVELCARACTERISTICA.CODIGOIMOVEL', $id)
            ->get();
    }
}
