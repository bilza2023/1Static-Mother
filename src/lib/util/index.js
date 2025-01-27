// @ts-nocheck
import { browser } from '$app/environment';
import { onMount } from 'svelte';
import { toast } from '@zerodevx/svelte-toast';
import { fade } from 'svelte/transition';
import { get } from 'svelte/store';
import { goto } from '$app/navigation';
import convertEqsToSlide from './convertEqToSlide.js';
import { API_URL,RESOURCE_URL, SOUND_FILE_PATH} from './config';
import Icons from './icons';
import uuid from './uuid';
import ajaxPost from './ajaxPost.js';
import updateStoreArray from './updateStoreArray.js';
import validateEmail from './validateEmail.js';
import validateString from './validateString.js';

            export {
            validateEmail,
            validateString,
            API_URL,
            RESOURCE_URL,
            ajaxPost,
                    onMount,
                    toast,
                    fade,
                    updateStoreArray,
                    get,
                    convertEqsToSlide,
                    uuid,
                    goto,
                    browser,
                    Icons,
                    SOUND_FILE_PATH
            }

/*<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} */