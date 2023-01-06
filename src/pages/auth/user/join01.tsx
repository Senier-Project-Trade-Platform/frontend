import Layout from '@components/common/Layout';
import Button from '../../../components/common/Button';
import { useRouter } from 'next/router';
import { useAppSelector } from '@features/hooks';
import authApi from '@apis/auth/authApi';
import axios from 'axios';
import instance from '@apis/_axios/instance';
import { useState } from 'react';

// interface;
import { memberInfoForm } from 'types/userInfo';
import ErrorMessage from '@components/common/ErrorMessage';

function Join01() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState();
  const userState = useAppSelector((state) => state.user);
  const handleNextButton = () => {
    router.push('/auth/user/join02');
  };

  const handleSkipButton = async () => {
    const memberInfo: memberInfoForm = {
      userId: userState.userId,
      nickname: userState.nickname,
      password: userState.password,
      telephone: userState.telephone,
      email: userState.email,
      keywords: userState.keywords,
    };
    const response = await authApi.postAuth(memberInfo);
    if (response.status === 200) {
      router('/auth/login');
    } else if (response.status === 409) {
      switch (response.code) {
        case 'EXIST_USER_ID':
          setErrorMessage('존재하는 아이디입니다.');
          break;
        case 'EXIST_USER_EMAIL':
          setErrorMessage('존재하는 이메일입니다.');
          break;
        case 'EXIST_NICKNAME':
          setErrorMessage('존재하는 닉네임입니다.');
          break;
      }
    }
  };
  return (
    <Layout>
      {errorMessage && (
        <ErrorMessage
          message={errorMessage}
          moreClassName="absolute left-[100px] top-[620px]"
        />
      )}
      <div className="text-18 ">
        <span className="text-[#F5535D] font-bold ">취향 분석</span>을 통해
        <br />
        나에게 <span className="font-bold">딱 맞는</span> <br />
        작품을 추천 받아보세요
      </div>
      <div className="h-[400px] flex justify-center items-center">IMG</div>
      <Button text="분석 시작" className="" onClick={handleNextButton} />
      <button
        className="w-full transition h-[52px] text-xs underline border border-transparent hover:[#F5535D]-2 px-0 text-[#999999] leading-3 font-normal"
        onClick={handleSkipButton}
      >
        다음에 할래요
      </button>
    </Layout>
  );
}

export default Join01;
