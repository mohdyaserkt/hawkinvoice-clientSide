import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='w-screen h-screen '>
        <nav></nav>
        <div className='flex h-full justify-center items-center'>
          <div className='bg-white lg:w-1/3 lg:h-4/5 h-3/4  flex flex-col   items-center justify-center '>
            <div className='flex flex-col  items-center justify-center'>
              <div className='text-2xl font-semibold'>Signup up for Figma</div><br />
              <button className='mt-8 border-2 border-black rounded-lg w-[22.375rem] h-[3rem] '>
                <div>
                  continue with Google
                </div>
              </button><br />
              <span>or</span>
            </div>
            {/* <div></div>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
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
            </div> */}
          </div>

        </div>
      </div>
    </>
  )
}
