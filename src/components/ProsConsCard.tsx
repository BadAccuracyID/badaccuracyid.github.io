import { animated, easings, useSpring } from '@react-spring/web';
import { useRef, useState } from 'react';

export function ProsCard() {
  const data: CardProperty[] = [
    {
      title: 'Passionate Learner',
      description:
        'I  am driven by a strong passion to constantly learn, improve myself, and accept new challenges.',
    },
    {
      title: 'Adaptable',
      description:
        'I will always adapt to new situations, and learn new things to adapt.',
    },
    {
      title: 'Perfectionist',
      description:
        'I prioritize paying attention to details and consistently strive to deliver the best possible results in everything I do.',
    },
  ];

  return <CardList data={data} cardColor="green" />;
}

export function ConsCard() {
  const data: CardProperty[] = [
    {
      title: 'Procrastinator with Determination',
      description:
        'While I may occasionally procrastinate, I am dedicated to completing tasks on time and pushing myself to finish them.',
    },
    {
      title: 'Self-Motivated',
      description:
        'My motivation is mostly intrinsic, making it a bit more challenging for others to motivate me externally.',
    },
    {
      title: 'Perfectionist',
      description:
        'As a perfectionist, I tend to prioritize perfecting individual tasks before progressing to the next. However, this often results in longer time spent on each task.',
    },
  ];

  return <CardList data={data} cardColor="red" />;
}

function CardList({
  data,
  cardColor,
}: {
  data: CardProperty[];
  cardColor: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const singleCardStyle = useSpring({
    width: isHovered ? '70%' : 'fit-content',
    height: isHovered ? 300 : 'auto',
    config: {
      precision: 0.0001,
      duration: 250,
    },
  });

  const multipleCardsStyle = useSpring({
    display: isHovered ? 'flex' : 'none',
    opacity: isHovered ? 1 : 0,
    config: {
      precision: 0.0001,
      easing: easings.easeInSine,
      duration: 350,
    },
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleToggle = () => {
    setIsHovered((prev) => !prev);
  };

  const color = cardColor === 'green' ? 'text-green-200' : 'text-red-200';
  return (
    <div
      className={'flex cursor-pointer flex-row gap-2'}
      onMouseEnter={handleMouseEnter}
      onMouseUp={handleToggle}
    >
      <animated.div
        style={singleCardStyle}
        className={`z-0 flex flex-col justify-between rounded-lg p-4 ${isHovered ? 'absolute' : ''}`}
      >
        <div className={`${color} text-start text-xl font-semibold`}>
          {`fun get${cardColor === 'green' ? 'Pros' : 'Cons'}(): Map<String, String> {`}
        </div>
        <br />
        <div className={`${color} text-start text-xl font-semibold`}>{'}'}</div>
      </animated.div>

      <animated.div
        style={multipleCardsStyle}
        className={'z-0 my-14 ml-8 grid grid-cols-2 gap-3'}
      >
        {data.map((property, index) => (
          <InnerCard key={index} property={property} />
        ))}
      </animated.div>
    </div>
  );
}

interface CardProperty {
  title: string;
  description: string;
}

const use3DCardEffect = () => {
  const cardRef = useRef(null);

  const [{ xys }, api] = useSpring(() => ({ xys: [0, 0, 1] }));

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    // @ts-ignore
    const rect = cardRef.current.getBoundingClientRect();
    api.start({
      xys: calc(e.clientX, e.clientY, rect),
    });
  };

  const calc = (
    x: number,
    y: number,
    rect: { top: number; height: number; left: number; width: number },
  ) => [
    -(y - rect.top - rect.height / 2) / 40,
    (x - rect.left - rect.width / 2) / 50,
    1.005,
  ];

  const trans = (x: number, y: number, s: number) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return { cardRef, handleMouseMove, trans, xys };
};

function InnerCard({ property }: { property: CardProperty }) {
  const { cardRef, handleMouseMove, trans, xys } = use3DCardEffect();

  return (
    <animated.div
      className={`z-0 flex max-w-sm flex-col rounded-lg bg-white p-4`}
      onMouseMove={handleMouseMove}
      ref={cardRef}
      style={{ transform: xys.to(trans) }}
    >
      <div className={'text-center text-xl font-semibold text-black'}>
        {property.title}
      </div>
      <br />
      <div className={'text-center text-xl text-black'}>
        {property.description}
      </div>
    </animated.div>
  );
}
