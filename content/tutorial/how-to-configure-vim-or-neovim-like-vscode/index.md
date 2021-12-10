---
title: "How to Configure Vim Or Neovim Like vs Code"
date: "2021-07-25"
description: "setup vim or neovim as vs code all all extection vim is powerfull text editor with lots of functionality"
image: ./setup-vim-as-vscode.webp
slug: "how-to-configure-vim-or-neovim-like-vscode"
category: "tutorial"
---

## What is Vim or neovim

**vim** is powerfull text editor with lots of functionality and many more. vim help us to write code very fast without using the mouse, all the work is done with keyboard currently i write this artice in vim as well.

**neovim** is another text editior this is the fork of vim but with great feature and many more customizable for your need its super fast and lightweight text editor to write code.

## Vim vs NeoVim

Features differences between Vim and Neo-Vim currently does not last for more than few months( except few core differences). All thanks to Bram who took it upon himself to keep Vim as no 1. If you are looking for a terminal editor to begin with neovim and vim does not make a difference. Neo-Vim makes the cut in terms of more modern usage. It will be interesting to follow where this software rivalry takes us.

## setup

its time to setup vim as are code editior let lets get started so in this article i am going to use neovim and if you want to use these thing with vim then follow the same steps for the vim, i provide the code the vim as well
so lets take a look on it.

### install NeoVim

as i told if you can use whatever you want so lets download neovim and then install the vim text editior.

#### windows

if you are using windows the i recommend to install to go to vim website and install from exe file its prety easy to install the neovim from the choco installer

just past the code

```text
do it yourself
```

#### Linux

```text
apt install neovim
```

#### mac

```text
brew install neovim
```

the same step is going for vim text editior just replace neovim to vim so now we have are vim and neovim are installed in our system so its time to edit the configuration and make our vim or neovim look and work like vs code so lets get started

## Configuration

its time to configure our vim or neovim as you know i do this thing in xubuntu so i do as my way follows these steps for your os.

so to do all the configuration you need to have a plugin manager for vim or neovim which can manage your plugs and these plugs provide you all the configuration that you want.

in this tutorial i am going to use [Vim Plug](https://github.com/junegunn/vim-plug) whech help you to just install the plugins that help us to write some configuration.

as per your OS you need to find how to install the vim plug in your os, just visit on [Vim Plug](https://github.com/junegunn/vim-plug) and find your way.

#### Linux

if you install vim then just open this location `~/.vimrc/init.vim` and if you intall neovim the visit `~/.config/nvim/init.vim` and the just paste the following code.

```vim
    " Specify a directory for plugins
    call plug#begin('~/.local/share/nvim/site/plugged')

    Plug 'neoclide/coc.nvim', {'branch': 'release'}
    Plug 'scrooloose/nerdtree'
    "Plug 'tsony-tsonev/nerdtree-git-plugin'
    Plug 'Xuyuanp/nerdtree-git-plugin'
    Plug 'tiagofumo/vim-nerdtree-syntax-highlight'
    Plug 'ryanoasis/vim-devicons'
    Plug 'airblade/vim-gitgutter'
    Plug 'ctrlpvim/ctrlp.vim' " fuzzy find files
    Plug 'scrooloose/nerdcommenter'
    "Plug 'prettier/vim-prettier', { 'do': 'yarn install' }

    Plug 'christoomey/vim-tmux-navigator'

    Plug 'vim-airline/vim-airline'
    "Plug 'morhetz/gruvbox'

    Plug 'HerringtonDarkholme/yats.vim' " TS Syntax

    " Initialize plugin system
    call plug#end()

    inoremap jk <ESC>
    nmap <C-n> :NERDTreeToggle<CR>
    vmap ++ <plug>NERDCommenterToggle
    nmap ++ <plug>NERDCommenterToggle

    " open NERDTree automatically
    "autocmd StdinReadPre _ let s:std_in=1
    "autocmd VimEnter _ NERDTree

    let g:NERDTreeGitStatusWithFlags = 1
    "let g:WebDevIconsUnicodeDecorateFolderNodes = 1
    "let g:NERDTreeGitStatusNodeColorization = 1
    "let g:NERDTreeColorMapCustom = {
    "\ "Staged" : "#0ee375",
     "\ "Modified" : "#d9bf91",
     "\ "Renamed" : "#51C9FC",
     "\ "Untracked" : "#FCE77C",
     "\ "Unmerged" : "#FC51E6",
     "\ "Dirty" : "#FFBD61",
     "\ "Clean" : "#87939A",
     "\ "Ignored" : "#808080"
     "\ }

    let g:NERDTreeIgnore = ['^node_modules$']

    " vim-prettier
    "let g:prettier#quickfix*enabled = 0
    "let g:prettier#quickfix_auto_focus = 0
    " prettier command for coc
    command! -nargs=0 Prettier :CocCommand prettier.formatFile
    " run prettier on save
    "let g:prettier#autoformat = 0
    "autocmd BufWritePre *.js,_.jsx,_.mjs,_.ts,_.tsx,_.css,_.less,_.scss,_.json,_.graphql,_.md,_.vue,_.yaml,\_.html PrettierAsync

    " ctrlp
    let g:ctrlp_user_command = ['.git/', 'git --git-dir=%s/.git ls-files -oc --exclude-standard']

    " j/k will move virtual lines (lines that wrap)
    noremap <silent> <expr> j (v:count == 0 ? 'gj' : 'j')
    noremap <silent> <expr> k (v:count == 0 ? 'gk' : 'k')

    set number
    set smarttab
    set cindent
    set tabstop=2
    set shiftwidth=2
    " always uses spaces instead of tab characters
    set expandtab

    " \***\* for nord time something **\*\*\*\*\*
    " sync open file with NERDTree
    " " Check if NERDTree is open or active
    "function! IsNERDTreeOpen()
    " return exists("t:NERDTreeBufName") && (bufwinnr(t:NERDTreeBufName) != -1)
    "endfunction

    " Call NERDTreeFind iff NERDTree is active, current window contains a modifiable
    " file, and we're not in vimdiff
    "function! SyncTree()
    " if &modifiable && IsNERDTreeOpen() && strlen(expand('%')) > 0 && !&diff
    " NERDTreeFind
    " wincmd p
    " endif
    "endfunction

    " Highlight currently open buffer in NERDTree
    "autocmd BufEnter \* call SyncTree()
    "\***\* end here **\*\*\*\*\*\*\*\*

    " coc config
    let g:coc_global_extensions = [
    \ 'coc-snippets',
    \ 'coc-pairs',
    \ 'coc-tsserver',
    \ 'coc-eslint',
    \ 'coc-prettier',
    \ 'coc-json',
    \ ]
    " from readme
    " if hidden is not set, TextEdit might fail.
    set updatetime=300

    " don't give |ins-completion-menu| messages.
    set shortmess+=c

    " always show signcolumns
    set signcolumn=yes

    " Use tab for trigger completion with characters ahead and navigate.
    " Use command ':verbose imap <tab>' to make sure tab is not mapped by other plugin.
    inoremap <silent><expr> <TAB>
    \ pumvisible() ? "\<C-n>" :
    \ <SID>check_back_space() ? "\<TAB>" :
    \ coc#refresh()
    inoremap <expr><S-TAB> pumvisible() ? "\<C-p>" : "\<C-h>"

    function! s:check_back_space() abort
    let col = col('.') - 1
    return !col || getline('.')[col - 1] =~# '\s'
    endfunction

    " Use <c-space> to trigger completion.
    inoremap <silent><expr> <c-space> coc#refresh()

    " Use <cr> to confirm completion, `<C-g>u` means break undo chain at current position.
    " Coc only does snippet and additional edit on confirm.
    inoremap <expr> <cr> pumvisible() ? "\<C-y>" : "\<C-g>u\<CR>"
    " Or use `complete_info` if your vim support it, like:
    " inoremap <expr> <cr> complete_info()["selected"] != "-1" ? "\<C-y>" : "\<C-g>u\<CR>"

    " Use `[g` and `]g` to navigate diagnostics
    nmap <silent> [g <Plug>(coc-diagnostic-prev)
    nmap <silent> ]g <Plug>(coc-diagnostic-next)

    " Remap keys for gotos
    nmap <silent> gd <Plug>(coc-definition)
    nmap <silent> gy <Plug>(coc-type-definition)
    nmap <silent> gi <Plug>(coc-implementation)
    nmap <silent> gr <Plug>(coc-references)

    " Use K to show documentation in preview window
    nnoremap <silent> K :call <SID>show_documentation()<CR>

    function! s:show_documentation()
    if (index(['vim','help'], &filetype) >= 0)
    execute 'h '.expand('<cword>')
    else
    call CocAction('doHover')
    endif
    endfunction

    " Highlight symbol under cursor on CursorHold
    autocmd CursorHold \* silent call CocActionAsync('highlight')

    " Remap for rename current word
    nmap <F2> <Plug>(coc-rename)

    " Remap for format selected region
    xmap <leader>f <Plug>(coc-format-selected)
    nmap <leader>f <Plug>(coc-format-selected)

    augroup mygroup
    autocmd!
    " Setup formatexpr specified filetype(s).
    autocmd FileType typescript,json setl formatexpr=CocAction('formatSelected')
    " Update signature help on jump placeholder
    autocmd User CocJumpPlaceholder call CocActionAsync('showSignatureHelp')
    augroup end

    " Remap for do codeAction of selected region, ex: `<leader>aap` for current paragraph
    xmap <leader>a <Plug>(coc-codeaction-selected)
    nmap <leader>a <Plug>(coc-codeaction-selected)

    " Remap for do codeAction of current line
    nmap <leader>ac <Plug>(coc-codeaction)
    " Fix autofix problem of current line
    nmap <leader>qf <Plug>(coc-fix-current)

    " Create mappings for function text object, requires document symbols feature of languageserver.
    xmap if <Plug>(coc-funcobj-i)
    xmap af <Plug>(coc-funcobj-a)
    omap if <Plug>(coc-funcobj-i)
    omap af <Plug>(coc-funcobj-a)

    " Use <C-d> for select selections ranges, needs server support, like: coc-tsserver, coc-python
    nmap <silent> <C-d> <Plug>(coc-range-select)
    xmap <silent> <C-d> <Plug>(coc-range-select)

    " Use `:Format` to format current buffer
    command! -nargs=0 Format :call CocAction('format')

    " Use `:Fold` to fold current buffer
    command! -nargs=? Fold :call CocAction('fold', <f-args>)

    " use `:OR` for organize import of current buffer
    command! -nargs=0 OR :call CocAction('runCommand', 'editor.action.organizeImport')

    " Add status line support, for integration with other plugin, checkout `:h coc-status`
    set statusline^=%{coc#status()}%{get(b:,'coc_current_function','')}

    " Using CocList
    " Show all diagnostics
    nnoremap <silent> <space>a :<C-u>CocList diagnostics<cr>
    " Manage extensions
    nnoremap <silent> <space>e :<C-u>CocList extensions<cr>
    " Show commands
    nnoremap <silent> <space>c :<C-u>CocList commands<cr>
    " Find symbol of current document
    nnoremap <silent> <space>o :<C-u>CocList outline<cr>
    " Search workspace symbols
    nnoremap <silent> <space>s :<C-u>CocList -I symbols<cr>
    " Do default action for next item.
    nnoremap <silent> <space>j :<C-u>CocNext<CR>
    " Do default action for previous item.
    nnoremap <silent> <space>k :<C-u>CocPrev<CR>
    " Resume latest coc list
    nnoremap <silent> <space>p :<C-u>CocListResume<CR>

    " Alternative way to save
    nnoremap <C-s> :w<CR>
    " Alternative way to quit
    nnoremap <C-M> :wq<CR>
```

after copy paste the about code in init.vim you need to just save the code and then just open any other file using vim or neovim for example you have hello.js on desktop then just run the line in terminal `nvim hello.js` and you have the nvim opend then just press : and the enter `PlugInstall` and you find that plugins are going to install. just wait for these download and the after the download is completed just exit the vim or nvim and then just simply reopen the editor and you can see the changes .
lets take a look on the keyboard shortcuts that i created for you.

1. if you are i normal mode then press ctrl + s to save the file 😀
2. back again in command mode and enter :Format to format the code with prettier 😀
3. come to any line and type ++ to comment on the like 😀

and many many more

click this link to watch more trick about the script in this video 👉 [ban awaid on youtube](https://www.youtube.com/watch?v=gnupOrSEikQ)
