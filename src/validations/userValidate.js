import {z} from 'zod';
import {norteDigital} from '@/api/api';

export const userValidate = z.object({
    username: z.string().min(1).refine((value) => value === norteDigital.username,{
        message: 'The username do not match'
    }),
    password: z.string().min(1).refine((value) => value === norteDigital.password,{
        message: 'The password do not match'
    })
});

