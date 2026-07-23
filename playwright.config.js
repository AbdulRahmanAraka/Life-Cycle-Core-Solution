import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({

  testDir: './tests',

  // ⭐ Increase timeout
  timeout: 120000,

  projects: [

    {
      name:'Desktop',
      use:{
        baseURL:'http://localhost:3000',
        viewport:{ width:1440,height:900 },
        headless:false
      }
    },

    {
      name:'Tablet',
      use:{
        baseURL:'http://localhost:3000',
        viewport:{ width:768,height:1024 },
        headless:false
      }
    },

    {
      name:'Mobile',
      use:{
        baseURL:'http://localhost:3000',
        viewport:{ width:375,height:812 },
        headless:false
      }
    }

  ]

});
