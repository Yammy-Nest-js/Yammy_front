
import {useState } from "react";


import {
    CircularInput,
    CircularTrack,
    CircularProgress,
} from "react-circular-input";


// export interface CalData {
//       id: number;
//       calvalue?: number;
//       fatvalue?: number;
//       carbovalue?: number;
//       proteinvalue?: number;
//   }

//배열방식
export interface CalData extends Array<{
    id: number;
    calvalue?: number;
    fatvalue?: number;
    carbovalue?: number;
    proteinvalue?: number;
}> {}

  export interface CalorieProps {
    CalData: CalData;
  }

  const Calorie: React.FC<CalorieProps> = ({ CalData }) =>{

    const [calvalue, setCalValue] = useState<number>(CalData[0]?.calvalue || 0);
    const [fatvalue, setFatValue] = useState<number>(CalData[0].fatvalue || 0);
    const [carbovalue, setCarboValue] = useState<number>(CalData[0].carbovalue || 0);
    const [proteinvalue, setProteinValue] = useState<number>(CalData[0].proteinvalue || 0);

    return (

        <div className='mt-[16px] pt-[27px] h-100vh'>
            <h2 className='w-[90%] m-auto font-bold'>CALORIE COUNT</h2>
            <div className='w-[90%] m-auto mt-2 h-[125px] bg-white shadow-sm rounded-2xl'>
                <div className='flex justify-around items-center h-[110%]'>
                    <div className='text-center'>
                        <div className='w-[60px] h-[60px] rounded-full bg-gray'>
                            <CircularInput value={calvalue} onChange={setCalValue} className='w-[86%] h-[86%] m-auto'>
                                <CircularTrack strokeWidth={50} stroke="#eee" />
                                <CircularProgress stroke={`hsl(18, 100%, 52%)`} strokeWidth={50} />
                            </CircularInput>
                            <span className='mt-[-35px] block opacity-80 text-xs'>{`${calvalue * 100}`}</span>
                        </div>
                        <span>cal</span>
                    </div>

                    <div className='text-center'>
                        <div className='w-[60px] h-[60px] rounded-full bg-gray'>
                            <CircularInput value={fatvalue} onChange={setFatValue} className='w-[86%] h-[86%] m-auto'>
                                <CircularTrack strokeWidth={50} stroke="#eee" />
                                <CircularProgress stroke={`hsl(44, 100%, 52%)`} strokeWidth={50} />
                            </CircularInput>
                            <span className='mt-[-35px] block opacity-80 text-xs'>{`${fatvalue * 100}`}</span>
                        </div>
                        <span className='text-black text-sm'>지방</span>
                    </div>

                    <div className='text-center'>
                        <div className='w-[60px] h-[60px] rounded-full bg-gray'>
                            <CircularInput value={carbovalue} onChange={setCarboValue} className='w-[86%] h-[86%] m-auto'>
                                <CircularTrack strokeWidth={50} stroke="#eee" />
                                <CircularProgress stroke={`hsl(44, 100%, 52%)`} strokeWidth={50} />
                            </CircularInput>
                            <span className='mt-[-35px] block opacity-80 text-xs'>{`${carbovalue * 100}`}</span>
                        </div>
                        <span className='text-black text-sm'>탄수화물</span>
                    </div>

                    <div className='text-center'>
                        <div className='w-[60px] h-[60px] rounded-full bg-gray'>
                            <CircularInput value={proteinvalue} onChange={setProteinValue} className='w-[86%] h-[86%] m-auto'>
                                <CircularTrack strokeWidth={50} stroke="#eee" />
                                <CircularProgress stroke={`hsl(44, 100%, 52%)`} strokeWidth={50} />
                            </CircularInput>
                            <span className='mt-[-35px] block opacity-80 text-xs'>{`${proteinvalue * 100}`}</span>
                        </div>
                        <span className='text-black text-sm'>단백질</span>
                    </div>


                </div>


            </div>
        </div>)

}


export default Calorie;