import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='w-screen h-screen '>
        <nav></nav>
        <div className='flex h-full justify-center items-center'>
          <div className='bg-white w-1/3 h-4/5 rounded-s-[80px]  rounded-t-[80px]'>
            <div>
              <div>Signup up for Figma</div>
              <button>
                <div>

                </div>
              </button>
              <span>or</span>
            </div>
            <div></div>
            <input type="text" />
            <input type="text" />
          </div>
          <div></div>
          <div>
            <input type="text" />
            <label htmlFor=""></label>
          </div>
          <div></div>
          <button>Create account</button>
          <div>
            <span></span>
          </div>
        </div>
      </div>
    </>
  )
}
