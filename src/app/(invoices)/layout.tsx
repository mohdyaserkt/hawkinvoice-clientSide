
import ProtectedRouter from '@/components/ProtectRouter/ProtectRouter'
import react, { ReactNode } from 'react'

const Layout: React.FC<{children: ReactNode}> = ({children})=>{
    return(
        <div>
            <ProtectedRouter>
            {children}
            </ProtectedRouter>
            
        </div>
    )
}

export default Layout