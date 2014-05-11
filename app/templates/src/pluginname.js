
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
  * @public
  */
  version:'0.1.0',

  minimumKiwiVersion:'0.7.0',

  pluginDependencies: [
    /*{
      name:'someplugin',
      minimumVersion:'1.1.1'
    }*/

  ]

};



/**
* Registers this plugin with the Global Kiwi Plugins Manager.
*/
Kiwi.PluginManager.register(Kiwi.Plugins.<%= pluginName%>);


 

 
