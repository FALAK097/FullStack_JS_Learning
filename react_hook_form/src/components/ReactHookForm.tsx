import { useForm, useFieldArray } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

let renderCount = 0;

type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  phNumbers: {
    number: string;
  }[];
};

export const ReactHookForm = () => {
  const { register, control, handleSubmit, formState } = useForm<FormValues>({
    // use of default values
    defaultValues: {
      username: 'Falak009',
      email: '',
      channel: '',
      // nested object
      social: {
        twitter: '',
        facebook: '',
      },
      // array
      phoneNumbers: ['', ''],
      phNumbers: [
        {
          number: '',
        },
      ],
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

  // useFieldArray
  const { fields, append, remove } = useFieldArray({
    name: 'phNumbers',
    control,
  });

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

        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <input
            type="text"
            id="twitter"
            {...register('social.twitter', {
              required: {
                value: true,
                message: 'Enter your twitter Account Name',
              },
            })}
          />
          <p className="error"> {errors.social?.twitter?.message} </p>
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            id="facebook"
            {...register('social.facebook', {
              required: {
                value: true,
                message: 'Enter your Facebook Account Name',
              },
            })}
          />
          <p className="error">{errors.social?.facebook?.message} </p>
        </div>

        <div className="form-control">
          <label htmlFor="primary-phone">Primary Phone Number</label>
          <input
            type="number"
            id="primary-phone"
            {...register('phoneNumbers.0', {
              required: {
                value: true,
                message: 'Primary Phone Number is required',
              },
            })}
          />
          <p className="error">{errors.phoneNumbers?.[0]?.message} </p>
        </div>

        <div className="form-control">
          <label htmlFor="secondary-phone">Secondary Phone Number</label>
          <input
            type="number"
            id="secondary-phone"
            {...register('phoneNumbers.1', {
              required: {
                value: true,
                message: 'Secondary Phone Number is required',
              },
            })}
          />
          <p className="error">{errors.phoneNumbers?.[1]?.message} </p>

          {/* useFieldArray */}
          <div>
            <label>List of Phone Numbers: </label>
            <div>
              {fields.map((field, index) => {
                return (
                  <div className="form-control" key={field.id}>
                    <input
                      type="number"
                      {...register(`phNumbers.${index}.number` as const)}
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => {
                          remove(index);
                        }}>
                        Remove
                      </button>
                    )}
                  </div>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  append({ number: '' });
                }}>
                Add Phone Number
              </button>
            </div>
          </div>
        </div>
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
