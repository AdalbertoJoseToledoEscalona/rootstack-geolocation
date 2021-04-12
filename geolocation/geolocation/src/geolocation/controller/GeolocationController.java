/**
 * 
 */
package geolocation.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @author adalberto
 *
 */
@Controller
//@RequestMapping("/geolocation")
public class GeolocationController {

	/**
	 * 
	 */
	public GeolocationController() {
		// TODO Auto-generated constructor stub
	}
	
	@RequestMapping(value = "/map", method = RequestMethod.GET)
	public String map(ModelMap model) {
		model.addAttribute("message", "Hello, World!");
		return "map";
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login(ModelMap model) {
		model.addAttribute("message", "Hello, World!");
		return "login";
	}

}
