import { useEffect, useState } from 'react';
import { Flex, Select, Box, Text, Icon, Spinner, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import { filterData, getFilterValues } from '../utils/filterData.js';

const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData);
    const router = useRouter();
    // Add location filter

    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const {query} = router;
        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            if(item.value && filterValues?.[item.name]) { 
            query[item.name] = item.value}});
        router.push({pathname: path, query});
    }

    return (
        <div>
            <Flex
                bg="grey.100"
                p="4"
                justifyContent="center"
                flexWrap="wrap">
                {filters.map((filter) => (
                    <Box key={filter.queryName}>

                        <Select
                            placeholder={filter.placeholder}
                            w="fit-content"
                            p="2"
                            onChange={(input) => searchProperties({ [filter.queryName]: input.target.value })}>
                            {filter?.items?.map((item) => (
                                <option value={item.value} key={item.value}> {item.name} </option>

                            ))}

                        </Select>

                    </Box>
                ))}
            </Flex>
        </div>
    )
}

export default SearchFilters;