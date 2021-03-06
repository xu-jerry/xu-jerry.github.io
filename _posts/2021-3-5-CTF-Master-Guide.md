---
layout: post
title: "CTF Master Guide"
date: 2021-3-5
---

This is a work in progress, for a cool and handy guide that anyone can use when stuck on a CTF challenge.

When first tackling a CTF challenge, there are a couple of things to identify first. Find the category, and a general idea of where the flag might be hiding. Sometimes, the flavortext contains lots of useful information, so don't skimp on reading that! 

Table of contents:
1. [Forensics](/blog/2021/03/05/CTF-Master-Guide.html#forensics)
    1. [Steganography](/blog/2021/03/05/CTF-Master-Guide.html/#steganography)
        1. [File Steganography](/blog/2021/03/05/CTF-Master-Guide.html/#file-steganography)
    2. [Wireshark](/blog/2021/03/05/CTF-Master-Guide.html/#wireshark)
    3. [Memory Forensics](/blog/2021/03/05/CTF-Master-Guide.html/#memory-forensics)

<a id="forensics"></a>
# Forensics

<a id="steganography"></a>
## Steganography

<a id ="file-steganography"> </a>
### File Steganography
- <code>file</code> to check file type
- Try checking the magic bytes if that doesn't work
- <code>binwalk</code>
- <code>strings</code>
- <code>hexdump</code>
- exif data
- If it is an image:
    - LSB or MSB
    - Color filters (Gimp, Photoshop) 
- If it is a Microsoft file like Word or Excel
    - rename file extension to <code>.zip</code>
    - unzip files, and analyze from there

<a id ="wireshark"> </a>
## Wireshark

<a id ="memory-forensics"> </a>
## Memory Forensics