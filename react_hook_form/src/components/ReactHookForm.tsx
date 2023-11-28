import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

let renderCount = 0;

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

export const ReactHookForm = () => {
  const { register, control, handleSubmit, formState } = useForm<FormValues>({
    // use of default values
    defaultValues: {
      username: 'Falak',
      email: '',
      channel: '',
    },

    // load saved data from API endpoint
    // defaultValues: async () => {
    //   const response = await fetch(
    //     'https://jsonplaceholder.typicode.com/users/1'
    //   );
    //   const data = await response.json();
    //   return {
    //     username: 'Falak',
    //     email: data.email,
    //     channel: '',
    //   };
    // },
  });
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log('Form Submitted', data);
  };

  renderCount++;
  return (
    <div>
      <h1>React Hook Form ({renderCount / 2}) </h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register('username', {
              required: {
                value: true,
                message: 'Username is required',
              },
              minLength: {
                value: 6,
                message: 'Username must be at least 6 characters',
              },
            })}
          />
          <p className="error"> {errors.username?.message} </p>
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid Email format',
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== 'admin@example.com' ||
                    'Enter a different Email Address'
                  );
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith('.in') ||
                    'This Domain is not supported'
                  );
                },
              },
            })}
          />
          <p className="error"> {errors.email?.message} </p>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register('channel', {
              required: {
                value: true,
                message: 'Channel is required',
              },
            })}
          />
          <p className="error"> {errors.channel?.message} </p>
        </div>
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};