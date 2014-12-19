<?php
App::uses('Pergunta', 'Model');

/**
 * Pergunta Test Case
 *
 */
class PerguntaTest extends CakeTestCase {

/**
 * Fixtures
 *
 * @var array
 */
	public $fixtures = array(
		'app.pergunta',
		'app.grupo',
		'app.competencia',
		'app.classe',
		'app.questionario',
		'app.resposta'
	);

/**
 * setUp method
 *
 * @return void
 */
	public function setUp() {
		parent::setUp();
		$this->Pergunta = ClassRegistry::init('Pergunta');
	}

/**
 * tearDown method
 *
 * @return void
 */
	public function tearDown() {
		unset($this->Pergunta);

		parent::tearDown();
	}

}
