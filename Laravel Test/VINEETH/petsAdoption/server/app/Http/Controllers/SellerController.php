<?php

namespace App\Http\Controllers;
use App\Models\Seller;
use App\Models\Upload;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;


class SellerController extends Controller
{
    //

    public function postOrder(Request $request){
        $validator = validator()->make($request->all(), [
            "upload_id"=> 'required',
        ]); 
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }
        $userId = Auth::user()->id;
        $upload = Upload::where('id', $request->upload_id)
                        ->where('user_id', '!=', $userId)
                        ->first();
        if ($upload) {
            $existingRecord = Seller::where('upload_id', $request->upload_id)
                                    ->where('user_id', $userId)
                                    ->first();
            if ($existingRecord) {
                return response()->json(['message' => 'Already Added'], 300);
            }
            $sellerId = $upload->user_id;
            $seller = new Seller;
            $seller->upload_id = $request->upload_id;
            $seller->user_id = $userId;
            $seller->seller_id = $sellerId;  
            $seller->status = 0;
            $seller->save();
            return response()->json(['message' => 'Successfully Added'], 201);
        } else {
            return response()->json(['message' => 'Upload Record Not Found Or Belongs To The User'], 300);
        }
    }
    
    public function getOrders(){
        $userId = Auth::user()->id;
        if(!$userId){
            return response()->json(['message' => ' Login Failed Please Do Again!'], 300);
        }
        $sellers = DB::table('sellers')
            ->join('upload', 'sellers.upload_id', '=', 'upload.id')
            ->join('user', 'sellers.seller_id', '=', 'user.id')
            ->select('sellers.*', 'upload.*', 'user.*')
            ->where('sellers.user_id', $userId)
            ->get();
        // $sellers=Seller::with('users')->with('uploads')->get();
        if($sellers){
            return response()->json(['status' => true, 'data' => $sellers], 200);
        } else {
            return response()->json(['message' => 'No Data!'], 300);
        }
    }
    public function getRequests(){
        $userId = Auth::user()->id;
        if(!$userId){
            return response()->json(['message' => ' Login Failed Please Do Again!'], 300);
        }
        $sellers = DB::table('sellers')
            ->join('upload', 'sellers.upload_id', '=', 'upload.id')
            ->join('user', 'sellers.user_id', '=', 'user.id')
            ->select('sellers.*', 'upload.*', 'user.*')
            ->where('sellers.seller_id', $userId)
            ->get();
        if($sellers){
            return response()->json(['status' => true, 'data' => $sellers], 200);
        } else {
            return response()->json(['message' => 'No Data!'], 300);
        }
    }

    public function statusUpdate(Request $request){
        $validator = validator()->make($request->all(), [
            "upload_id"=> 'required',
            'name'=> 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }
        $user = User::where('name', $request->input('name'))->first();
        if (!$user) {
            return response()->json(['error' => 'Login Failed Please Do Again!'], 300);
        }
        $uploadId = $request->upload_id;
        $userId = $user->id;
        Seller::where('upload_id', $uploadId)
            ->where('user_id', $userId)
            ->update(['status' => 21]);
        Seller::where('upload_id', $uploadId)
            ->where('user_id', '!=', $userId)
            ->update(['status' => 1]);
        return response()->json(['status'=>true,'success' => 'Status updated successfully'], 200);
    }
}
