import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='w-screen h-screen '>
        <nav></nav>
        <div className='flex h-full justify-center items-center'>
          <div className='bg-white lg:w-1/3 lg:h-4/5 rounded-s-[5rem]  rounded-t-[5rem]  flex flex-col   items-center justify-center '>
            <div className='flex flex-col  items-center justify-center'>
              <div className='text-2xl font-semibold'>Signup up for Figma</div><br />
              <button className='mt-8 border-2 border-black rounded-lg w-[22.375rem] h-[3rem] '>
                <div className='text-base'>
                  continue with Google
                </div>
              </button><br />
              <span className='text-gray-600'>or</span>
            </div>
            <div></div>

            <div className="relative h-10  min-w-[200px]">
              <input
                className="peer h-full w-full rounded-[7px] border  border-black border-t-transparent bg-transparent px-3 py-2.5  text-sm  text-gray-600 outline outline-1 transition-all placeholder-shown:border placeholder-shown:border-black placeholder-shown:border-t-black focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-600 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-600">
                Required
              </label>
            </div>

            <div></div>
            <div>
              <input type="text" />
              <label htmlFor=""></label>
            </div>
            <div></div>
            <button>Create account</button>
            <div>
              <span>By clicking "Create account" or "Continue with Google", you agree to the </span>
            </div>

            <div>
              <div>
                <a href="">Use sigle sign-on</a>
              </div>
              <div>
                already have an account?<a href="">Log in</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
