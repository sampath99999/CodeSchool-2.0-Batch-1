<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // return $request;
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'phoneno' => 'required|string|max:10|unique:users',
            'password' => 'required|string|min:6',
        ]);


        $user = new User();
        $user->email = $request->input("email");
        $user->name = $request->input("name");
        $user->password = Hash::make($request->input("password"));
        $user->phoneno = $request->input("phoneno");
        $user->save();
        return response()->json([
            'status' => true,
            'message' => 'User created successfully',
            'data' => $user

        ]);
    }
    public function login(Request $request)
    {
        // return $request;
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = ["email" => $request['email'], "password" => $request["password"]];

        $token = Auth::guard('api')->attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized User!',
            ], 401);
        }
        $user = Auth::guard('api')->user();

        return response()->json([
            'status' => true,
            'data' => $user,
            'authorization' => [
                'token' => $token,
                'type' => 'bearer',
            ],
            'message' => 'Successfully LoggedIn!',

        ]);
    }
}
