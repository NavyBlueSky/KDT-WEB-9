import { useForm } from 'react-hook-form';

export default function FormPrac() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const valid = (data) => {
        console.log('valid', data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(valid)}>
                <input
                    type="text"
                    placeholder="name"
                    // ref기 때문에 에러났을때 focus도 같이 잡아준다
                    {...register('name', {
                        required: '이름은 필수 항목입니다',
                    })}
                />
                {errors.name?.message}
                <br />
                <input
                    type="text"
                    placeholder="age"
                    {...register('age', {
                        required: true,
                        // validate: 직접 오류를 만드는것
                        validate: {
                            numberValidate: (v) => v >= 0 || '0 이상의 숫자만 입력 가능합니다.',
                        },
                    })}
                />
                {errors.age?.message}
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
}
