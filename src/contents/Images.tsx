import adobeXd from '~/assets/Image/Skills/adobe-xd.svg'
import adobeaudition from '~/assets/Image/Skills/adobeaudition.svg'
import afterEffects from '~/assets/Image/Skills/after-effects.svg'
import angular from '~/assets/Image/Skills/angular.svg'
import aws from '~/assets/Image/Skills/aws.svg'
import bootstrap from '~/assets/Image/Skills/bootstrap.svg'
import bulma from '~/assets/Image/Skills/bulma.svg'
import c from '~/assets/Image/Skills/c.svg'
import capacitorjs from '~/assets/Image/Skills/capacitorjs.svg'
import coffeescript from '~/assets/Image/Skills/coffeescript.svg'
import cplusplus from '~/assets/Image/Skills/cplusplus.svg'
import csharp from '~/assets/Image/Skills/csharp.svg'
import css from '~/assets/Image/Skills/css.svg'
import dart from '~/assets/Image/Skills/dart.svg'
import deno from '~/assets/Image/Skills/deno.svg'
import django from '~/assets/Image/Skills/django.svg'
import docker from '~/assets/Image/Skills/docker.svg'
import firebase from '~/assets/Image/Skills/firebase.svg'
import gcp from '~/assets/Image/Skills/gcp.svg'
import gimp from '~/assets/Image/Skills/gimp.svg'
import git from '~/assets/Image/Skills/git.svg'
import go from '~/assets/Image/Skills/go.svg'
import graphql from '~/assets/Image/Skills/graphql.svg'
import html from '~/assets/Image/Skills/html.svg'
import illustrator from '~/assets/Image/Skills/illustrator.svg'
import java from '~/assets/Image/Skills/java.svg'
import javascript from '~/assets/Image/Skills/javascript.svg'
import julia from '~/assets/Image/Skills/julia.svg'
import kotlin from '~/assets/Image/Skills/kotlin.svg'
import lightroom from '~/assets/Image/Skills/lightroom.svg'
import materialui from '~/assets/Image/Skills/materialui.svg'
import matlab from '~/assets/Image/Skills/matlab.svg'
import memsql from '~/assets/Image/Skills/memsql.svg'
import mongoDB from '~/assets/Image/Skills/mongoDB.svg'
import mysql from '~/assets/Image/Skills/mysql.svg'
import nextJS from '~/assets/Image/Skills/nextJS.svg'
import nginx from '~/assets/Image/Skills/nginx.svg'
import numpy from '~/assets/Image/Skills/numpy.svg'
import nuxtJS from '~/assets/Image/Skills/nuxtJS.svg'
import opencv from '~/assets/Image/Skills/opencv.svg'
import photoshop from '~/assets/Image/Skills/photoshop.svg'
import php from '~/assets/Image/Skills/php.svg'
import postgresql from '~/assets/Image/Skills/postgresql.svg'
import premierepro from '~/assets/Image/Skills/premierepro.svg'
import python from '~/assets/Image/Skills/python.svg'
import pytorch from '~/assets/Image/Skills/pytorch.svg'
import react from '~/assets/Image/Skills/react.svg'
import ruby from '~/assets/Image/Skills/ruby.svg'
import selenium from '~/assets/Image/Skills/selenium.svg'
import strapi from '~/assets/Image/Skills/strapi.svg'
import svelte from '~/assets/Image/Skills/svelte.svg'
import swift from '~/assets/Image/Skills/swift.svg'
import tailwind from '~/assets/Image/Skills/tailwind.svg'
import tensorflow from '~/assets/Image/Skills/tensorflow.svg'
import typescript from '~/assets/Image/Skills/typescript.svg'
import vitejs from '~/assets/Image/Skills/vitejs.svg'
import vue from '~/assets/Image/Skills/vue.svg'
import vuetifyjs from '~/assets/Image/Skills/vuetifyjs.svg'
import webix from '~/assets/Image/Skills/webix.svg'
import wordpress from '~/assets/Image/Skills/wordpress.svg'

import azure from '~/assets/Image/Skills/azure.svg'
import blender from '~/assets/Image/Skills/blender.svg'
import fastify from '~/assets/Image/Skills/fastify.svg'
import figma from '~/assets/Image/Skills/figma.svg'
import flutter from '~/assets/Image/Skills/flutter.svg'
import haxe from '~/assets/Image/Skills/haxe.svg'
import ionic from '~/assets/Image/Skills/ionic.svg'
import markdown from '~/assets/Image/Skills/markdown.svg'
import microsoftoffice from '~/assets/Image/Skills/microsoftoffice.svg'
import picsart from '~/assets/Image/Skills/picsart.svg'
import sketch from '~/assets/Image/Skills/sketch.svg'
import unity from '~/assets/Image/Skills/unity.svg'
import wolframalpha from '~/assets/Image/Skills/wolframalpha.svg'

import canva from '~/assets/Image/Skills/canva.svg'


export const skillsImage = (skill: any) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'gcp':
            return gcp;
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'docker':
            return docker;
        case 'illustrator':
            return illustrator;
        case 'adobe xd':
            return adobeXd;
        case 'after effects':
            return afterEffects;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'nuxt js':
            return nuxtJS;
        case 'react':
            return react;
        case 'svelte':
            return svelte;
        case 'typescript':
            return typescript;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'bulma':
            return bulma;
        case 'capacitorjs':
            return capacitorjs;
        case 'coffeescript':
            return coffeescript;
        case 'memsql':
            return memsql;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'vuetifyjs':
            return vuetifyjs;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'c#':
            return csharp;
        case 'dart':
            return dart;
        case 'go':
            return go;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        case 'julia':
            return julia;
        case 'matlab':
            return matlab;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'ruby':
            return ruby;
        case 'swift':
            return swift;
        case 'adobe audition':
            return adobeaudition;
        case 'aws':
            return aws;
        case 'deno':
            return deno;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'gimp':
            return gimp;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'lightroom':
            return lightroom;
        case 'materialui':
            return materialui;
        case 'nginx':
            return nginx;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'premiere pro':
            return premierepro;
        case 'pytorch':
            return pytorch;
        case 'selenium':
            return selenium;
        case 'strapi':
            return strapi;
        case 'tensorflow':
            return tensorflow;
        case 'webix':
            return webix;
        case 'wordpress':
            return wordpress;
        case 'azure':
            return azure;
        case 'blender':
            return blender;
        case 'fastify':
            return fastify;
        case 'figma':
            return figma;
        case 'flutter':
            return flutter;
        case 'haxe':
            return haxe;
        case 'ionic':
            return ionic;
        case 'markdown':
            return markdown;
        case 'microsoft office':
            return microsoftoffice;
        case 'picsart':
            return picsart;
        case 'sketch':
            return sketch;
        case 'unity':
            return unity;
        case 'wolframalpha':
            return wolframalpha;
        case 'canva':
            return canva;
        default:
            break;
    }
}