import { getProviders, signIn as SignIntoProvider } from 'next-auth/react';
import Header from '../../components/Header';
import instaBrosLogo from '../../assets/InstaBrosLogo.png';

function signIn({ providers }) {
  return (
    <>
    <Header />
      <div className='flex flex-col items-center justify-center min-h-screen py-2 px-14 -mt-10 text-center'>
        <img 
        className='w-80'
        src='https://i.ibb.co/fvvDhQf/Insta-Bros-Logo-Correct-Width-2-0.png'
        alt='Instagram Logo' 
        />
        <p className='font-xs italic'>Welcome to InstaBros, an instagram created just for Broderagens</p>

        <div className='mt-36 '>
          {providers && Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button className='p-3 bg-blue-500 rounded-lg text-white' onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/' })}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;