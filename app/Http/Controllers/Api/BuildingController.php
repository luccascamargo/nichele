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
            ->whenWhereRooms($request->has('room'), $request->room) // Coluna QUANTIDADEDORMITORIO
            ->whenWhereToilets($request->has('toilet'), $request->toilet)
            ->whenWhereGarage($request->has('garage'), $request->garage)
            ->whenWhereArea($request->has('area'), $request->area)  // Coluna AREAPRIVATIVA
            // ->whenWhereSuites($request->has('suite'), $request->suite) // Tabela imb_imovelcaracteristica, coluna QUANTIDADE, codigo = 8
            // ->whenWherePlant($request->has('plan'), $request->plan) // Marcus previsa ver onde tem esse dado, nao encontrei
            // ->whenWhereOffer($request->has('offer'), $request->offer) // REMOVER FRONT, Marcus pediu pra remover, mas iremos fazer apenas no front
            ->isPending()
            ->simplePaginate(10);
        return $buildings;
    }

    /**
     * @return mixed
     */
    public function city()
    {
        return Address::has('building')->get('city')->map(function($item) {
            return [
                'value' => $item->city,
                'label' => $item->city
            ];
        });
    }

    /**
     * @return mixed
     */
    public function district()
    {
        return Address::has('building')->get('neighborhood')->map(function($item) {
            return [
                'value' => $item->neighborhood,
                'label' => $item->neighborhood
            ];
        });
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Building $building)
    {
        return $building->load('ENDERECO');
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
        return $data = DB::table('imb_imovelcaracteristica')
            ->join('imb_caracteristica', 'imb_caracteristica.codigocaracteristica', '=', 'imb_imovelcaracteristica.codigocaracteristica')
            ->select('imb_imovelcaracteristica.*', 'imb_caracteristica.descricao')
            ->where('imb_imovelcaracteristica.codigoimovel', $id)
            ->get();
    }

    /**
     * @return mixed
     */
    public function album($id)
    {
        return $data = DB::table('imb_imovelfoto')
            ->select('imb_imovelfoto.*')
            ->where('imb_imovelfoto.codigoimovel', $id)
            ->orderBy('imb_imovelfoto.ordem', 'asc')
            ->get();
    }
    /**
     * @return mixed
     */
    public function highligthRent()
    {
        return $data = DB::table('IMB_IMOVEL')
            ->select('IMB_IMOVEL.*')
            ->where('IMB_IMOVEL.DESTAQUEALUGUEL', 'S')
            ->get();
    }

    /**
     * @return mixed
     */
    public function GetCommercialRealEstate()
    {
        return $data = DB::table('IMB_IMOVEL')
            ->select('IMB_IMOVEL.*')
            ->where('IMB_IMOVEL.DESTAQUEVENDA', 'S')
            ->get();
    }

    /**
     * @return mixed
     */
    public function GetImoveisRelacionais($cep)
    {
        return $data = DB::table('IMB_IMOVEL')
            ->select('IMB_IMOVEL.*')
            ->where('IMB_IMOVEL.CEP', $cep)
            ->limit(10)
            ->get();
    }
}
