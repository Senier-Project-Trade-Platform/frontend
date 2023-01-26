import React from 'react';
import styled from 'styled-components';

const LayoutBox = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
`;

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutBox className="bg-grey-1 relative h-full w-full max-w-[420px] overflow-y-scroll border px-4">
      {children}
    </LayoutBox>
  );
}
