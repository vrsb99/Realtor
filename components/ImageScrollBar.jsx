import {useContext} from 'react';
import Image from 'next/image';	
import {Box, Icon, Flex} from '@chakra-ui/react';	
import {FaArrorwAltCircleLeft, FaArrorwAltCircleRight} from 'react-icons/fa';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';

const LeftArrow = () => { // Setting up LeftArrow
    const {scrollPrev} = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon
            as={FaArrorwAltCircleLeft}
            onClick={() => scrollNext()}
            fontSize="2xl"
            cursor="pointer"
            d={['none','none','none','block']}
            />

        </Flex>
    )
}

const RightArrow = () => { // Setting up LeftArrow
    const {scrollNext} = useContext(VisibilityContext);

    return (
        <Flex justifyContent="center" alignItems="center" marginRight="1">
            <Icon
            as={FaArrorwAltCircleRight}
            onClick={() => scrollNext()}
            fontSize="2xl"
            cursor="pointer"
            d={['none','none','none','block']}
            />

        </Flex>
    )
}

const ImageScrollBar = ({data}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden'}}>
        {data.map((item) => (
             <Box width='910px' itemId={item.id} overflow='hidden' p='1'>
             <Image placeholder="blur" blurDataURL={item.url} src={item.url} width={1000} height={500}  sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
           </Box>
        ))}
    </ScrollMenu>
  )
}

export default ImageScrollBar;