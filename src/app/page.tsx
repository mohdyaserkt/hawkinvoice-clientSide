import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='w-screen h-screen '>
        <nav></nav>
        <div className='flex h-full justify-center items-center'>
          <div className='bg-white lg:w-1/3 lg:h-4/5 rounded-s-[5rem]  rounded-t-[5rem]  flex flex-col   items-center justify-center '>
            <div className='flex flex-col  items-center justify-center'>
              <div className='text-2xl font-ligthbold'>Signup up for Figma</div><br />
              <button className='mt-8 border-2 border-black rounded-lg w-[22.375rem] h-[3rem] '>
                <div className='text-base'>
                  continue with Google
                </div>
              </button>
              <span className='text-gray-600 my-5'>or</span>
            </div>
            <div></div>

            <div className="relative h-10  min-w-[200px]">
              <input
                className="rounded-lg w-[22.375rem] h-[3rem]  peer   border  border-black border-t-transparent bg-transparent px-3 py-2.5  text-sm  text-black outline outline-1 transition-all placeholder-shown:border placeholder-shown:border-black placeholder-shown:border-t-black focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-600 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-600">
                Email
              </label>
            </div>
            <div className=" relative h-10  min-w-[200px] mt-7">
              <input
                className="  rounded-lg w-[22.375rem] h-[3rem]  peer   border  border-black border-t-transparent bg-transparent px-3 py-2.5  text-sm  text-black outline outline-1 transition-all placeholder-shown:border placeholder-shown:border-black placeholder-shown:border-t-black focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-black before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-600 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-600 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-600">
                Password
              </label>
            </div>

            <div></div>
            <div className="inline-flex items-center my-5">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"

                data-ripple-dark="true"
              >
                <input
                  id="login"
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-black transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                />
                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </label>
              <label
                className="mt-px cursor-pointer select-none font-light text-gray-950"

              >
                I agree to join swift pay's mailing list
              </label>
            </div>

            <button className='border-2 border-black rounded-lg w-[22.375rem] h-[3rem] bg-black text-white font-semibold'>Create account</button>
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
