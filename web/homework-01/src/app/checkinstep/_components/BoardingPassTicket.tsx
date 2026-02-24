"use client";

import React from 'react';
import Image from 'next/image';
import Barcode from 'react-barcode';

export interface BoardingPassTicketProps {
    passengerName: string;
    terminal: string;
    gate: string;
    departureDisplayCode: string;
    departureDisplayName: string;
    departureDate: string;
    arrivalDisplayCode: string;
    arrivalDisplayName: string;
    arrivalDate: string;
    flightNo: string;
    seatNo: string;
    zone: string;
    seq: string;
    boardingTime: string;
    departureTime: string;
    arrivalTime: string;
    barcodeValue: string;
}

export default function BoardingPassTicket({
    passengerName,
    terminal,
    gate,
    departureDisplayCode,
    departureDisplayName,
    departureDate,
    arrivalDisplayCode,
    arrivalDisplayName,
    arrivalDate,
    flightNo,
    seatNo,
    zone,
    seq,
    boardingTime,
    departureTime,
    arrivalTime,
    barcodeValue,
}: BoardingPassTicketProps) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-border-secondary overflow-hidden flex flex-col w-full">
            {/* Header (Blue) */}
            <div className="bg-primary px-6 py-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-2 font-bold text-xl">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 4-2.5 2.5H4l-2 2h3l2-2h2.5L10 15l4 6l1.2-.7c.4-.2.7-.6.6-1.1z" />
                    </svg>
                    NEXT
                </div>
                <div className="text-sm font-medium">Boarding Pass</div>
            </div>

            <div className="p-6 flex flex-col gap-6">
                {/* Passenger Info / Gate */}
                <div className="flex justify-between items-start">
                    <div>
                        <div className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wide">Passenger</div>
                        <div className="text-xl md:text-2xl font-bold text-gray-900 leading-none mb-2">{passengerName}</div>
                        <div className="text-sm font-medium text-gray-600">ADT &bull; PNR: ABC123</div>
                    </div>
                    <div className="flex text-right gap-6">
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-xs font-bold text-gray-500 mb-1">Terminal</span>
                            <span className="text-xl md:text-2xl font-bold text-gray-900 leading-none">{terminal}</span>
                        </div>
                        <div className="h-full w-px bg-gray-200 min-h-[40px]"></div>
                        <div className="flex flex-col items-center justify-center">
                            <span className="text-xs font-bold text-gray-500 mb-1">Gate</span>
                            <span className="text-xl md:text-2xl font-bold text-gray-900 leading-none">{gate}</span>
                        </div>
                    </div>
                </div>

                {/* Flight Route Box */}
                <div className="bg-secondary rounded-xl p-6 flex flex-row items-center justify-between border border-gray-100 relative">
                    <div className="flex flex-col flex-1">
                        <span className="text-xs font-medium text-gray-600 mb-2 truncate max-w-[140px]" title={departureDisplayName}>{departureDisplayName}</span>
                        <span className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">{departureDisplayCode}</span>
                        <span className="text-sm font-medium text-gray-500 mt-2">{departureDate}</span>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center px-4 relative">
                        <div className="w-full flex items-center justify-between opacity-30 text-primary">
                            <span className="w-full border-t-2 border-dashed border-current mx-2 h-0"></span>
                        </div>
                        <div className="absolute top-1/2 -translate-y-[15px] bg-secondary px-2 flex flex-col items-center">
                            <svg className="text-primary mb-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 4-2.5 2.5H4l-2 2h3l2-2h2.5L10 15l4 6l1.2-.7c.4-.2.7-.6.6-1.1z" />
                            </svg>
                            <span className="bg-gray-200 text-gray-700 text-[10px] font-bold px-2 py-0.5 rounded-full">{flightNo}</span>
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 items-end text-right">
                        <span className="text-xs font-medium text-gray-600 mb-2 truncate max-w-[140px]" title={arrivalDisplayName}>{arrivalDisplayName}</span>
                        <span className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">{arrivalDisplayCode}</span>
                        <span className="text-sm font-medium text-gray-500 mt-2">{arrivalDate}</span>
                    </div>
                </div>

                {/* Flight Details Row */}
                <div className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[100px] bg-secondary rounded-xl p-4 flex flex-col items-center justify-center border border-gray-100">
                        <span className="text-xs font-bold text-gray-500 mb-1">Seat</span>
                        <span className="text-xl font-bold text-gray-900 leading-none mt-1">{seatNo}</span>
                    </div>
                    <div className="flex-1 min-w-[120px] bg-secondary rounded-xl p-4 flex items-center justify-center gap-6 border border-gray-100">
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-bold text-gray-500 mb-1">Zone</span>
                            <span className="text-xl font-bold text-gray-900 leading-none mt-1">{zone}</span>
                        </div>
                        <div className="h-6 w-px bg-gray-300"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-bold text-gray-500 mb-1">Seq</span>
                            <span className="text-xl font-bold text-gray-900 leading-none mt-1">{seq}</span>
                        </div>
                    </div>
                    <div className="flex-1 min-w-[100px] bg-secondary rounded-xl p-4 flex flex-col items-center justify-center border border-gray-100">
                        <span className="text-xs font-bold text-gray-500 mb-1">Boarding</span>
                        <span className="text-xl font-bold text-primary leading-none mt-1">{boardingTime}</span>
                    </div>
                </div>

                {/* Departure/Arrival Row */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 bg-secondary rounded-xl p-5 border border-gray-100">
                        <div className="text-xs font-bold text-gray-500 mb-2">Departure</div>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-3xl font-extrabold text-gray-900 leading-none">{departureTime}</span>
                            <span className="text-sm font-bold text-gray-500">UTC</span>
                        </div>
                        <div className="text-sm font-medium text-gray-600">{departureDate}</div>
                    </div>
                    <div className="flex-1 bg-secondary rounded-xl p-5 border border-gray-100">
                        <div className="text-xs font-bold text-gray-500 mb-2">Arrival</div>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-3xl font-extrabold text-gray-900 leading-none">{arrivalTime}</span>
                            <span className="text-sm font-bold text-gray-500">UTC</span>
                        </div>
                        <div className="text-sm font-medium text-gray-600">{arrivalDate}</div>
                    </div>
                </div>

                <div className="border-t border-dashed border-gray-200 my-2"></div>

                {/* Barcode Section */}
                <div className="flex flex-col items-center justify-center p-2 rounded-xl border border-gray-200">
                    <div className="w-full flex items-center justify-center overflow-hidden my-4">
                        <Barcode value={barcodeValue} width={2} height={80} displayValue={false} />
                    </div>
                </div>
                <span className="text-xs text-center text-gray-500 font-medium">Scan at security and boarding gate</span>

                {/* Apple Wallet Button */}
                <button
                    className="w-full py-4 flex items-center justify-center gap-3 text-lg font-bold min-h-[60px] bg-black hover:bg-gray-800 text-white transition-all cursor-pointer shadow-sm"
                    style={{ borderRadius: '12px' }}
                >
                    <Image
                        src="/apple_wallet.png"
                        alt="Apple Wallet"
                        width={28}
                        height={28}
                    />
                    Add to Apple Wallet
                </button>
            </div>
        </div>
    );
}
