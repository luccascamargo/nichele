<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Address;
use App\Models\Building;
use App\Models\Type;
use Illuminate\Http\Request;

class BuildingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Building::with('address', 'buildingType', 'characteristics')
            ->whenWhereCode($request->has('code'), $request->code)
            ->whenWhereType($request->has('type'), $request->type)
            ->whenWhereBuildingType($request->has('building_type'), $request->building_type)
            ->whenWhereCity($request->has('city'), $request->city)
            ->whenWhereDistrict($request->has('district'), $request->district)
            ->whenWherePrice($request->has('price'), $request->price)
            ->whenWhereRooms($request->has('room'), $request->room)
            ->whenWhereSuites($request->has('suite'), $request->suite)
            ->whenWhereToilets($request->has('toilet'), $request->toilet)
            ->whenWhereGarage($request->has('garage'), $request->garage)
            ->whenWherePlant($request->has('plan'), $request->plan)
            ->whenWhereOffer($request->has('offer'), $request->offer)
            ->whenWhereArea($request->has('area'), $request->area)
            ->isPending()
            ->simplePaginate(10);
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
        return $building->load('address','type','characteristics');
    }

}
