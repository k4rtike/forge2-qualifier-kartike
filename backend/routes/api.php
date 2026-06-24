<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BoardController;
use App\Http\Controllers\BoardListController;
use App\Http\Controllers\CardController;

Route::apiResource('boards', BoardController::class);
Route::apiResource('boards.lists', BoardListController::class);
Route::apiResource('boards.lists.cards', CardController::class);