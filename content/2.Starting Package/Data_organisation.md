---
title: Data organisation
description: 'The acurate way to sort your data'
category: Tutorials
---

## Introduction
The team has access to a server, LEON, allowing us to store all our data as well as any file. This is probably the most important tool of the team.  
First you need to follow the tutorial to have acces to the LKB network: <NuxtLink to="/Starting Package/Tools"> Usefool tools </NuxtLink>.  
It is very important to master it in order to facilitate the transfer of knowledge and to work efficiently.  
The real challenge is: how to organise our data?

## Data
Here is an example of how the repository should looks:
  </code-block>

  ```bash
  EQ15B/LEON-15B/DATA/your_team/year/the_project/topic/date
  ```

  </code-block>

By "topic" here, we mean for instance the type of measurement.

The goal of this tree structure is to minimize the **span** of the tree.

What do we mean by this ? 

::image-lkb{target='StartingPackage/tools/data_tree.jpg' size=45 center} 

You will notice that if you reverse the tree and do the chronological ordering higher up in the tree, the span will grow exponentially with time, which will quickly become unwieldy.

Furthermore, if someone is looking through your data, it is not clear what kind of measurement is in each folder.


In the same spirit, data processing output **should be placed at the same location as the data !**

This is an example of how to do your organisation but of course you also have to pay attention to the tree structure to store your presentations (slides) or figures that others might have to use, posters (svg files), etc...  
For your data that you want to keep only for yourself it is possible to use your own available users file (ex: mabobaker).  
