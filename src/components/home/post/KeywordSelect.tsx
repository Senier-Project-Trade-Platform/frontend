import tw from 'tailwind-styled-components';
interface Keyword {
  id: string;
  name: string;
}

const KEYWORDLIST: Keyword[] = [
  { id: '1', name: '유화' },
  { id: '2', name: '심플한' },
  { id: '3', name: '세련된' },
  { id: '4', name: '모던한' },
  { id: '6', name: '화려한' },
  { id: '5', name: '변화의' },
  { id: '7', name: '비판적인' },
  { id: '8', name: '젊은' },
  { id: '9', name: '자유로운' },
  { id: '10', name: '다양한' },
  { id: '11', name: '개성적인' },
  { id: '12', name: '소박한' },
  { id: '13', name: '율동적인' },
  { id: '14', name: '편안한' },
  { id: '15', name: '포근한' },
  { id: '16', name: '자연적인' },
  { id: '17', name: '강한' },
  { id: '18', name: '다이나믹한' },
  { id: '19', name: '차가운' },
  { id: '20', name: '새로운' },
  { id: '21', name: '소박한' },
  { id: '22', name: '안정된' },
  { id: '23', name: '고급수러운' },
  { id: '24', name: '수수한' },
  { id: '25', name: '탁한' },
  { id: '26', name: '우울한' },
  { id: '27', name: '여유있는' },
  { id: '28', name: '우아한' },
  { id: '29', name: '단순한' },
  { id: '30', name: '선명한' },
  { id: '31', name: '투명한' },
  { id: '32', name: '단순한' },
];

interface SelectKeywordProps {
  keywordList: string[];
  setKeywordList: (keywordList: string[]) => void;
  [key: string]: any;
}

const SelectKeywordTag = tw.div<SelectKeywordProps>``;

export default function KeywordSelect({
  keywordList,
  setKeywordList,
  ...rest
}: SelectKeywordProps) {
  const onKeywordClick = (name: string) => {
    const tasteSelectedArr = [...keywordList];
    if (tasteSelectedArr.includes(name)) {
      tasteSelectedArr.splice(tasteSelectedArr.indexOf(name), 1);
    } else {
      tasteSelectedArr.push(name);
    }
    setKeywordList(tasteSelectedArr);
  };

  return (
    <SelectKeywordTag {...rest}>
      <div className="flex flex-wrap py-4 text-[#767676]">
        {KEYWORDLIST.map((keyword) => (
          <div
            key={keyword.id}
            id={keyword.id}
            className={`${
              keywordList?.includes(keyword.name)
                ? 'border-[#F5535D] text-[#767676]'
                : 'border-[#CECECE] text-[#767676]'
            } w rounded-full flex justify-center items-center px-3 py-1 border mr-2 mb-2.5 cursor-pointer text-14 text-[#767676]`}
            onClick={() => onKeywordClick(keyword.name)}
          >
            {keyword.name}
          </div>
        ))}
      </div>
    </SelectKeywordTag>
  );
}