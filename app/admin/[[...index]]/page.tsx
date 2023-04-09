'use client'

import { config } from '@/sanity.config';
import {NextStudio} from 'next-sanity/studio';

const AdminPages = () => {
    return  <NextStudio config={config} />
};

export default AdminPages;