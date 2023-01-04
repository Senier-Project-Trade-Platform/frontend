import tw from 'tailwind-styled-components';

interface buttonProps {
  text: string;
  $valid?: boolean;
  onClick?: () => void;
  [key: string]: any;
}

const DoubleCheckButton = tw.button<buttonProps>`
w-[58px] h-[25px] text-[12px] radius border-[1px] rounded flex justify-center ${(
  p,
) => (p.$valid ? 'border-[#DBDBDB]' : 'border-[#0099FF]')}
  ${(p) => (p.$valid ? 'text-[#767676]' : 'text-[#0099FF]')}
  items-center absolute right-[8px] top-[45px] cursor-pointer font-bold
`;

export default function Button({ text, onClick, ...rest }: buttonProps) {
  return (
    <DoubleCheckButton onClick={onClick} {...rest}>
      {text}
    </DoubleCheckButton>
  );
}
