import { useForm } from 'react-hook-form';

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    //handleSubmit:두개의 함수를 받는데 하나는 유요할때 실행되는 함수(필수) 하나는 유효하지 않을 때 실행되는 함수

    const onValid = (data) => {
        console.log('onValid', data);
    };

    // const onInValid = (err) => {
    //     console.log('onInValid', err);
    // };

    console.log('errors', errors);
    console.log('watch', watch);

    return (
        <>
            <form onSubmit={handleSubmit(onValid)}>
                <input
                    type="text"
                    {...register('username', { required: '이름을 입력하세요', minLength: { message: '최소 2글자이상 작성하세요', value: 2 } })}
                    placeholder="이름..."
                />
                {errors.username?.message} {/*//?: 판단하고 처리 */}
                <br />
                <input
                    type="text"
                    {...register('email', {
                        required: '이메일을 입력하세요',
                        validate: { useGmail: (v) => v.includes('gmail.com') || 'gmail로만 가입가능합니다.' },
                    })}
                    placeholder="이메일..."
                />
                {errors.email?.message}
                <br />
                <input type="text" {...register('password')} placeholder="비밀번호..." />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
