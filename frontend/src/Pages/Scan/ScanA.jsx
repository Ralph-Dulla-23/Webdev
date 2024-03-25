import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';  
import { InputNumber } from 'primereact/inputnumber';
import { Message } from 'primereact/message';
import { useForm, Controller } from 'react-hook-form'; // Import useForm and Controller
import { Toast } from 'primereact/toast'; // Import Toast
import { InputText } from "primereact/inputtext"; // Import InputText
import { classNames } from 'primereact/utils'; // Import classNames

function ScanA() {

  const [value, setValue] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);
  const navigate = useNavigate();
  const toast = useRef(null);

  useEffect(() => {
    const id = localStorage.getItem('user_id');
    if (id) {
      navigate('/Dashboard');
    }
  }, [navigate]);

  const defaultValues = {
    value: ''
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    reset
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    data.value && show();

    reset();
  };

  const show = () => {
    toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: getValues('value') });
  };

  const getFormErrorMessage = (name) => {
    return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
  };

  const handleDashboardClick = () => {
    localStorage.setItem('user_id', value);
    navigate('/Dashboard');
  };

  const handleHomeClick = () => navigate('/');
  const handleBorrowClick = () => navigate('/Borrow');
  const handleReturnClick = () => navigate('/Return');
  const handleScanClick = () => navigate('/Scan');
  const handleScanRClick = () => navigate('/ScanR');
  const handleUpdateItemsClick = () => navigate('/Update-Items');
  const hanldeRequestUserClick = () => navigate('/Request-User');
  const hanldeRequestAdminClick = () => navigate('/Request-Admin');
  const handleRequestClick = () => navigate('/Request');

  return (
    <>

<link rel="stylesheet" href="https://fonts.googleapis.com/cs
s2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48
,100..700,0..1,-50..200" />

<div className="WholeContent">
<Controller
  name="value"
  control={control}
  rules={{ required: 'Please enter an ID' }} // Add rules for required field
  render={({ field, fieldState }) => (
    <div className="scan">
      <span id='logoscan' className="material-symbols-outlined">
        gpp_maybe
      </span>
      <h4>Hello Please Input ID First</h4>
      <InputNumber inputStyle={{margin: '5px'}}
        id={field.name}
        className={classNames('inputID', { 'p-invalid': fieldState.error })}
        placeholder="Input ID"
        value={field.value}
        onValueChange={(e) => field.onChange(e.value)}
      />
      {fieldState.error && (
        <small className="p-error">{fieldState.error.message}</small>
      )}
      <Button
        className='tn'
        label="Confirm"
        onClick={handleSubmit(handleDashboardClick)} // Use handleSubmit from react-hook-form
      />
    </div>
  )}
/>
      <footer>
        <div className="footer-content">
          <h3>GearGuard</h3>
          <p>Praise be Jesus and Mary! Now and Forever!</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default ScanA
