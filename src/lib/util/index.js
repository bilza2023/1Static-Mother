// @ts-nocheck
import { browser } from '$app/environment';
import { onMount } from 'svelte';
import { toast } from '@zerodevx/svelte-toast';
import { fade } from 'svelte/transition';
import { get } from 'svelte/store';
import { goto } from '$app/navigation';
import convertEqsToSlide from './convertEqToSlide.js';
import { API_URL,RESOURCE_URL, SOUND_FILE_PATH} from './config';
import uuid from './uuid';
import updateStoreArray from './updateStoreArray.js';
import validateEmail from './validateEmail.js';
import ajaxPost from './ajaxPost.js';
import validateString from './validateString.js';

export {
        validateEmail,
        validateString,
        API_URL,
        RESOURCE_URL,
        onMount,
        ajaxPost,
        toast,
        fade,
        updateStoreArray,
        get,
        convertEqsToSlide,
        uuid,
        goto,
        browser,
        SOUND_FILE_PATH
}

/*<div in:fade={{ delay: 300 }} out:fade={{ delay: 300 }} */