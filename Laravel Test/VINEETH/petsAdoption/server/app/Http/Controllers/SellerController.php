<?php

namespace App\Http\Controllers;
use App\Models\Seller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SellerController extends Controller
{
    //
    public function sell(Request $request){
        $seller=new Seller;
        $seller->upload_id=$request->upload_id;
        $seller->user_id=1;
        $seller->status=0;
        $seller->save();
        return response()->json(['successfully Added']);
    }
}
