import * as yup from 'yup';

export const signupSchema = yup.object({
  email: yup.string().email('이메일을 입력해주세요.'),
  nickname: yup
    .string()
    .min(2, '2~6자 닉네임을 입력해주세요.')
    .max(6, '2~6자 닉네임을 입력해주세요.')
    .required('2~6자 닉네임을 입력해주세요.'),
  password: yup.string().required(),
  passwordCheck: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 같지 않습니다.')
    .required('비밀번호를 입력해주세요.'),
});
