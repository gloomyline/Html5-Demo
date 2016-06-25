## 网页爬虫（利用nodejs实现）
    1. 需要用到的知识点
    
        - node-crawler
            1.how to install
            
                ```
                npm install crawler
            
                ```
            2.cram course
                
                ```javascript
                var Crawler = require('crawler')
                var url = require('url')
                
                var c = new Crawler({
                    maxConnections : 10,
                    // This will be called for each crawled page
                    callback : function(error,result,$){
                        // $ is Cheerio by default
                        //a lean implementation of core jQuery designed specifically for the server
                        $('a').each(function(index,value){
                            var toQueueUrl = $(value).attr('href')
                            c.queque(toQueueUrl)
                        })
                    }
                })
                
                //Queque just one URL,with default callback
                c.queque('http:www.baidu.com')
                ```
        - mt-files-downloader
            1.how to install
                
                ```
                npm install mt-files-downloader
                ```
            
            2.Usage
                
                ```javascript
                //require the module
                var Downloader = require('mt-files-downloader')
                //create a new Downloader instance
                var downloader = new Downloader()
                //create a new download
                var dl = downloader.download('FILE_URL','FILE_Save_Path');
                //start the download
                dl.start()
                ```
    
    2. 参考链接
        - [more infos of node-crawler](https://github.com/sylvinus/node-crawler)
        - [more infos of mt-files-downloader](https://github.com/leeroybrun/node-mt-files-downloader)
    3. 代码片段
    
        ```javascript
        var Crawler = require('crawler')
        var Downloader = require('mt-files-downloader')
        var url = require('url')
        var downloader = new Downloader()
        //specified the directory for the downloader
        var fileDirName = './download'
        
        var c = new Crawler({
            maxConnections : 10,
            callback : function(error,result,$){
                $('.s-result-item').each(function(value,index){
                    var toQueueUrl = $(value).find('img').attr('src')
                    var title = $(value).find('h2').text()
                    saveFile(toQueueUrl,title)
                })
            }
        })
        
        function saveFile(fileUrl,info){
            var fileSavedPath = fileDierName + info + (new Date()).getTime() + '.' + fileUrl.split('.').slice(-1)
            var dl = downloader.download(fileUrl,fileSavedPath)
            dl.start()
        }
        
        ```
