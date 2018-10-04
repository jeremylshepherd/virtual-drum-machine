var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var $ = function $(q) {return document.querySelector(q);};
var app = $("#app");
var data = [
{
  letter: "Q",
  instrument: "Snare",
  id: "Snare",
  src: "http://bigsamples.free.fr/d_kit/snare/lg_snare.wav" },

{
  letter: "W",
  instrument: "Kick",
  id: "Kick",
  src: "http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Free%20Kick%20Sample%208-900-Free-Loops.com.mp3" },

{
  letter: "E",
  instrument: "High Hat",
  id: "High Hat",
  src: "http://www.denhaku.com/r_box/sr16/sr16hat/sweethat.wav" },

{
  letter: "A",
  instrument: "Tom Tom",
  id: "Tom Tom",
  src:
  "http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/22-14dbl%20head%20tom.wav" },

{
  letter: "S",
  instrument: "Cymbal",
  id: "Cymbal",
  src: "http://www.electrongate.com/dmxfiles/drumtraks/sci_ride.wav" },

{
  letter: "D",
  instrument: "(more) Cowbell",
  id: "more_Cowbell",
  src:
  "https://www.autistici.org/2000-maniax/samples/Emu%20Drumulator/Cowbell.wav" },

{
  letter: "Z",
  instrument: "Guitar (G_chord)",
  id: "Guitar_G_chord)",
  src: "http://scruss.com/wordpress/wp-content/uploads/2017/12/chord-G.wav" },

{
  letter: "X",
  instrument: "Guitar (C_chord)",
  id: "Guitar_C_chord)",
  src: "http://scruss.com/wordpress/wp-content/uploads/2017/12/chord-C.wav" },

{
  letter: "C",
  instrument: "Guitar (D_chord)",
  id: "Guitar_G_chord)",
  src: "http://scruss.com/wordpress/wp-content/uploads/2017/12/chord-D.wav" }];



var mediaPromise = function mediaPromise(media) {
  if (media !== undefined) {
    media.then(function (_) {}).catch(function (error) {return console.log(error);});
  }
};var

Drum = function (_React$Component) {_inherits(Drum, _React$Component);
  function Drum(props) {_classCallCheck(this, Drum);var _this = _possibleConstructorReturn(this, (Drum.__proto__ || Object.getPrototypeOf(Drum)).call(this,
    props));

    _this.handleClick = _this.handleClick.bind(_this);return _this;
  }_createClass(Drum, [{ key: "handleClick", value: function handleClick()

    {
      var audio = this.refs.audio;
      mediaPromise(audio.play());
      this.props.display(this.refs.drumPad.getAttribute("data-instrument"));
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", {
            ref: "drumPad",
            className: "drum-pad",
            "data-instrument": this.props.instrument,
            id: this.props.instrument,
            onClick: this.handleClick },

          this.props.letter,
          React.createElement("audio", {
            preload: "true",
            ref: "audio",
            src: this.props.src,
            className: "clip",
            id: this.props.letter })));



    } }]);return Drum;}(React.Component);


var Panel = function Panel(props) {
  return (
    React.createElement("div", { id: "panel" },
      React.createElement("div", { id: "display" },
        React.createElement("h1", null, props.instrument))));



};var

App = function (_React$Component2) {_inherits(App, _React$Component2);
  function App(props) {_classCallCheck(this, App);var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));

    _this2.state = {
      instrument: "",
      letter: null };


    _this2.updateDisplay = _this2.updateDisplay.bind(_this2);
    _this2.pressPlay = _this2.pressPlay.bind(_this2);
    _this2.depressPlay = _this2.depressPlay.bind(_this2);return _this2;
  }_createClass(App, [{ key: "updateDisplay", value: function updateDisplay(

    instrument) {
      this.setState({
        instrument: instrument });

    } }, { key: "pressPlay", value: function pressPlay(

    e) {
      var letters = this.props.data.map(function (d) {return d.letter;});
      var key = e.key.toUpperCase();
      if (letters.indexOf(key) !== -1) {
        mediaPromise($("#" + key).play());
        $("#" + key).parentElement.setAttribute('class', 'drum-pad activated');
        this.updateDisplay(
        $("#" + key).parentElement.getAttribute("data-instrument"));

      }
    } }, { key: "depressPlay", value: function depressPlay(

    e) {
      var letters = this.props.data.map(function (d) {return d.letter;});
      var key = e.key.toUpperCase();
      if (letters.indexOf(key) !== -1) {
        $("#" + key).parentElement.setAttribute('class', 'drum-pad');
      }
    } }, { key: "componentDidMount", value: function componentDidMount()

    {var _this3 = this;
      document.addEventListener("keydown", function (e) {return _this3.pressPlay(e);});
      document.addEventListener("keyup", function (e) {return _this3.depressPlay(e);});
    } }, { key: "componentWillUnmount", value: function componentWillUnmount()

    {
      document.addEventListener("keydown");
      document.addEventListener("keyup");
    } }, { key: "render", value: function render()

    {var _this4 = this;
      var drums = this.props.data.map(function (d) {return (
          React.createElement(Drum, _extends({
            ref: "drum",
            key: d.instrument },
          d, {
            display: _this4.updateDisplay,
            play: _this4.state.letter,
            onKeyDown: _this4.keyPlay })));});


      return (
        React.createElement("div", { id: "drum-machine", ref: "app" },
          React.createElement("div", { id: "machine-head" },
            React.createElement("h1", null, "Virtual Drum Machine"),
            React.createElement("i", { className: "fab fa-free-code-camp" })),

          React.createElement("div", { id: "machine-body" },
            React.createElement("div", { id: "pad-container" }, drums),
            React.createElement(Panel, { instrument: this.state.instrument }))));



    } }]);return App;}(React.Component);


ReactDOM.render(React.createElement(App, { data: data }), app);