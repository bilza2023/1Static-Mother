// @ts-nocheck
import { browser } from '$app/environment';
import { onMount } from 'svelte';
import { toast } from '@zerodevx/svelte-toast';
import { fade } from 'svelte/transition';
import { get } from 'svelte/store';
import { goto } from '$app/navigation';
import checkToken from './checkToken';
import checkAdminToken from './checkAdminToken';
import convertEqsToSlide from './convertEqToSlide.js';
import { API_URL,RESOURCE_URL,SOUND_FILE_PATH } from './config';
import Icons from './icons';
import uuid from './uuid';

            export {
            API_URL,
            RESOURCE_URL,
                    onMount,
                    toast,
                    fade,
                    get,
                    convertEqsToSlide,
                    uuid,
                    goto,
                    browser,
                    Icons,
                    checkToken,
                    checkAdminToken,
                    SOUND_FILE_PATH
            }

/*<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} */