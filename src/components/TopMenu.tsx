
import Image from 'next/image'
import TopMenuItem from './MenuItem'
import Link from 'next/link'

export default function TopMenu() {

    return (
        <div className="h-[70px] bg-paper fixed top-0 left-0 right-0 z-30 border-b border-t border-solid border-gray-400 flex flex-row">
            <Link href={'/'}> 
                <Image src={'/img/logo.png'} className="h-full w-auto ml-3 my-1" alt='logo' width={0} height={0} sizes='100vh'/>
            </Link>
            <div className='flex flex-row absolute right-0 h-full mr-3 items-center'>
                <TopMenuItem title='Browse Hotel' pageRef='/hotel'/>
                <TopMenuItem title='Sign-In' pageRef='/Sign-In' />
                <Link href={'/profile'} >
                    <Image src={'/img/profile-user.png'} alt='profile' width={0} height={0} sizes='3vh' className='h-[100%] w-auto mx-5'/>
                </Link>
                <Link href={'/cart'}>
                    <Image src={'/img/shopping-cart.png'} alt='profile' width={0} height={0} sizes='3vh' className='h-[100%] w-auto mx-5'/>
                </Link>
                
            </div>
        </div>
    )
    }