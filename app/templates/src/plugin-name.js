
/**
* The description of <%= pluginName%> goes here
*
* @module Kiwi
* @submodule Plugins
* @namespace Kiwi.Plugins
* @class <%= pluginName%>
* @main
*/
Kiwi.Plugins.<%= pluginName%> = {
  
  /**
  * The name of this plugin.
  * @property name
  * @type String
  * @public
  */
  name:'<%= pluginName%>',

  /**
  * The version of this plugin.
  * @property version
  * @type String
  * @default '1.0.0'
  * @public
  */
  version:'0.9.0'

};

/**
* Registers this plugin with the Global Kiwi Plugins Manager if it is avaiable.
* 
*/
Kiwi.PluginManager.register(Kiwi.Plugins.<%= pluginName%>);


 

 
