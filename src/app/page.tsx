import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='w-screen h-screen '>
        <nav></nav>
        <div className='flex h-full justify-center items-center'>
          <div className='bg-white w-1/3 h-4/5 rounded-s-[80px]  rounded-t-[80px]  flex flex-col   items-center '>
            <div>
              <div className='text-2xl'>Signup up for Figma</div>
              <button>
                <div>
                  continue with Google
                </div>
              </button>
              <span>or</span>
            </div>
            <div></div>
            <input type="text" />
            <input type="text" />
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
