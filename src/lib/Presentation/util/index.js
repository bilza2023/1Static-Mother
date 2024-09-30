// @ts-nocheck
import { browser } from '$app/environment';
import { onMount } from 'svelte';
import { toast } from '@zerodevx/svelte-toast';
import { fade } from 'svelte/transition';
import { get } from 'svelte/store';
import { goto } from '$app/navigation';
import updateStoreArray from './updateStoreArray';
import convertEqsToSlide from './convertEqToSlide.js';
import { API_URL,RESOURCE_URL,SOUND_FILE_PATH } from './config';

import Icons from './icons';
import ajaxPost from './ajaxPost';
import ajaxPostData from './ajaxPostData';
import ajaxPostMsg from './ajaxPostMsg';
import ajaxGet from './ajaxGet';
import uuid from './uuid';

            export {

                
            API_URL,
            RESOURCE_URL,
            SOUND_FILE_PATH,
                    onMount,
                    toast,
                    fade,
                    get,
                    updateStoreArray,
                    convertEqsToSlide,
                    uuid,
                    goto,
                    browser,
                    Icons,
                    ajaxPost,
                    ajaxPostData,
                    ajaxPostMsg,
                    ajaxGet
            }

/*<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} */