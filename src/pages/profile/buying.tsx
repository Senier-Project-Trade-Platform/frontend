import Layout from '@components/common/Layout';
import Navigate from '@components/common/Navigate';
import ArtWorkItem from '@components/profile/ArtItem';
import React from 'react';

export default function Buying() {
  return (
    <Layout>
      <Navigate isRightButton={false} message="구매작품  " />
      <p className="text-14">
        <span className="text-brand ">2건</span>의 구매작품이 있습니다.
      </p>
      <ArtWorkItem
        lastChild={
          <p>
            <span className="text-10 text-[#FFF] bg-[#767676] px-1 py-0.5 rounded">
              배송완료
            </span>
            <span className="text-14 text-brand font-bold ml-1">450,000원</span>
          </p>
        }
      />
      <ArtWorkItem
        lastChild={
          <p>
            <span className="text-10 text-[#FFF] bg-[#767676] px-1 py-0.5 rounded">
              배송완료
            </span>
            <span className="text-14 text-brand font-bold ml-1">450,000원</span>
          </p>
        }
      />
      <ArtWorkItem
        lastChild={
          <p>
            <span className="text-10 text-[#FFF] bg-[#767676] px-1 py-0.5 rounded">
              배송완료
            </span>
            <span className="text-14 text-brand font-bold ml-1">450,000원</span>
          </p>
        }
      />
    </Layout>
  );
}