Feature: Registro de usuario
  El usuario puede realizar su registro exitosamente
  Scenario: Registro exitoso
    Given Deseo registrame en SMS Builder
    When ingreso mis datos de afiliacion y me registro
    Then muestra mensaje

  Scenario: Registro existente
    Given Deseo registrame en SMS Builder
    When ingreso mis datos existentes de afiliacion y me registro
    Then muestra mensaje