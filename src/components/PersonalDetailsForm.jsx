export default function PersonalDetailsForm() {
  return (
    <>
      <div className='fullName'>
        <label for='name'>Full name</label>
        <input type='text' placeholder='Noah Smith' id='name' />
      </div>
      <div className='email'>
        <label htmlFor='email'>E-mail</label>
        <input type='email' placeholder='qwert@gmail.fr' id='email' />
      </div>
      <div className='phoneNumber'>
        <label htmlFor='phoneNumber'>Phone number</label>
        <input type='text' placeholder='33 444 555' id='phoneNumber' />
      </div>
      <div className='adresse'>
        <label htmlFor='adresse'>Adresse</label>
        <input type='text' placeholder='02 Rue de ...' id='adresse' />
      </div>
    </>
  );
}
