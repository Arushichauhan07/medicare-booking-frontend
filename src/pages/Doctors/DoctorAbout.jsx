import { formatDate } from '../../../utilis/dateFormat';

const DoctorAbout = ({name, about, qualifications, experiences}) => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headColor font-semibold flex items-center gap-2'>
        About of
        <span className='text-irisBlueColor font-bold text-[24px] leading-9'>{name}</span>
        </h3>
        <p className='text_para'>
            {about}
        </p>
      </div>
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headColor font-semibold '>
            Education
        </h3>   

        <ul className='pt-4 md:p-5'>
            {qualifications?.map((item, index) => (
            <li key={index} className='flex flex-col sm:flex-row sm:justify-between
            sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formatDate(item.startingDate)} - {formatDate(item.endingDate)}
                    </span>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>
                        {item.degree}
                    </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                        {item.university}
                </p>
            </li> 
            ))}
            
        </ul>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headColor font-semibold '>
            Experience
        </h3>
        <ul className='pt-4 md:p-5'>
            {experiences?.map((item, index) => (
            <li key={index} className='flex flex-col sm:flex-row sm:justify-between
            sm:items-end md:gap-5 mb-[30px]'>
                <div>
                    <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                        {formatDate(item.startingDate)} - {formatDate(item.endingDate)}
                    </span>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>
                        {item.position}
                    </p>
                </div>
                <p className='text-[14px] leading-5 font-medium text-textColor'>
                        {item.hospital}
                </p>
            </li> 
            ))}
            
        </ul>
        </div>
      </div>
    </div>
  )
}

export default DoctorAbout