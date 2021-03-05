1、浏览器打开网站http://tool.chinaz.com/dns，检测github.com；

2、选择TTL值最低的一个ip例如：13.250.177.223

3、找到本机的hosts文件，C:\Windows\System32\drivers\etc\hosts, 打开编辑。（若无权限，将该文件复制到桌面，改完后再粘贴进去），在最后面加上：13.250.177.223 github.com

4、保存后，打开cmd，执行命令：ipconfig /flushdns，刷新网站速度加快，若速度仍然慢，在第一步时换个其他ip。