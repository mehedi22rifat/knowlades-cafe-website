
import profile from '../../assets/images/profile.png'
const Headers = () => {
    return (
        <header className='flex justify-between items-center max-w-[90%] m-auto p-4 border-b-2'>
               <h1 className='text-2xl font-bold'>Knowladeg Cafi</h1>
               <img src={profile} alt="" />
        </header>
    );
};

export default Headers;