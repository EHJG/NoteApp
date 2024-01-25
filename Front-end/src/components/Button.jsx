import React from 'react'
import { Pencil } from 'lucide-react';

export default function Button({valor, click}) {
    return (
        <>
          <button 
          className= {valor && 'w-1/6 transition-background inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-gradient-to-r from-slate-100 via-[#c7d2fe] to-[#8678f9] bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium text-black duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'}
          onClick={click}
          >
            {!valor ? <Pencil/> : valor}
          </button>
        </>
      );
    };
