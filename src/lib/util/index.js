// @ts-nocheck
import { browser } from '$app/environment';
import { onMount } from 'svelte';
import { toast } from '@zerodevx/svelte-toast';
import { fade } from 'svelte/transition';
import { get } from 'svelte/store';
import { goto } from '$app/navigation';
import chqLogin from './chqLogin.js';
import checkToken from './checkToken';
import checkAdminToken from './checkAdminToken';
import convertEqsToSlide from './convertEqToSlide.js';
import { API_URL,RESOURCE_URL, SOUND_FILE_PATH} from './config';
import { isLoginStore,isAdminStore } from './appStore';
import Icons from './icons';
import uuid from './uuid';
import ajaxPost from './ajaxPost.js';
import updateStoreArray from './updateStoreArray.js';
import validateEmail from './validateEmail.js';
import validateString from './validateString.js';
// import chqLogin from './chqLogin';

            export {
            validateEmail,
            validateString,
            isLoginStore,isAdminStore,
            API_URL,
            RESOURCE_URL,
            ajaxPost,
                    onMount,
                    toast,
                    fade,
                    updateStoreArray,
                    chqLogin,
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